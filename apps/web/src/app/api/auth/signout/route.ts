// import { BACKEND_URL } from "@/lib/constants";
// import { deleteSession } from "@/lib/session";
// import { redirect, RedirectType } from "next/navigation";

// import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const respone = await authFetch(`${BACKEND_URL}/auth/signout`, {
//     method: "POST",
//   });
//   if (respone.ok) {

//   }
//   await deleteSession();

//   redirect("/", RedirectType.push);
// }
