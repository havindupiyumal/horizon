"use server";

import { ID } from "node-appwrite";
import { createSessionClient , createAdminClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "@/lib/utils";
import { redirect } from "next/navigation";

export const signUp = async (data: SignUpParams) => {

    try {

        const {email, password, firstName, lastName} = data;

        const { account, database } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
        );
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("horizon-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
        
        const promise = database.createDocument(
            process.env.APPWRITE_DATABASE_ID!,
            process.env.APPWRITE_USER_COLLECTION_ID!,
            newUserAccount.$id,
            {}
        );

        return parseStringify(newUserAccount)

    } catch (error) {
        console.log("Sign Up : ",error)
    }

}

export const signIn = async (data: signInProps) => {

    try {
        const {email, password} = data;

        const { account } = await createAdminClient();

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("horizon-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });
    } catch (error) {
        console.log("Sign Up : ",error)
        return null;
    }

}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }

  export async function signOut() {
  try {
    const { account } = await createSessionClient();
  
    cookies().delete("horizon-session");
    await account.deleteSession("current");
  
    redirect("/sign-in");
  } catch (error) {
    console.log('Sign in Error ', error)
    redirect("/sign-in");
  }
    
  }