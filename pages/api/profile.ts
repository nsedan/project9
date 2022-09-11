// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  profilePic: string;
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    profilePic:
      "https://firebasestorage.googleapis.com/v0/b/resume-279909.appspot.com/o/1579537828056.jpeg?alt=media&token=7f3fc4ed-5559-40d3-ad52-412937b69722",
    description:
      "Developer and Gamer.\nPassionate about technology, I'm an industrious and curious person. Love to learn and love to teach. Embracing the Agile mindset.",
  });
}
