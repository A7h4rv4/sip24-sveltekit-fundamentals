import prisma from "$lib/prisma";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());
    const username = data.username;
    const caption = data.caption;
    const Image = Buffer.from(await data.image.arrayBuffer()).toString(
      "base64"
    );

    await prisma.post.create({
      data: {
        username,
        caption,
        Image,
      },
    });

    throw redirect(302, "/");
  },
};