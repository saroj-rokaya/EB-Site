import { cn } from "../lib/utils.jsx";
import Marquee from "../ui/Marquee.jsx";

const reviews = [
    {
        name: "Paras Dhami",
        course: "Core Python",
        body: "The course was well-organized, and the instructor made complex concepts easy to grasp. The hands-on exercises were particularly useful in reinforcing my understanding. Thank you, EB-Skills! - Roshan Kumal",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "Suraj Siwakoti",
        course: "React JS Course",
        body: "I recently completed the React JS course. The practical projects were great for hands-on learning. Thank you, EB-Skills!",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Nawaraj Adhikari",
        course: "Frontend Development",
        body: "I recently completed the 3-month web development course with EB-Skills, and it was fantastic, and the instructors made complex topics easy to understand. Thank you, EB-Skills! - Suraj Thapa",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Roshan Thapa",
        course: "Flutter Development",
        body: "I recently completed the 1-month Flutter development course, The course was well-structured, I now feel much more confident in my Flutter skills. Thank you, EB-Skills! - Roshani Thapa",
        img: "https://avatar.vercel.sh/jane",
    },

];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, course, body, }) => {
    return (
        <>
            <figure
                className={cn(
                    "relative w-96 my-5 cursor-pointer overflow-hidden rounded-xl border p-5",
                    // light styles
                    " light-back hover:normal-back",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                )}//image styling
            >

                <div className="flex flex-row w-full py-2 items-center gap-2">
                    <img className="rounded-full" width="50" height="50" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-xl font-bold dark-text">
                            {name}
                        </figcaption>
                        <p className="text-lg font-semibold dark-text dark:text-white/40">{course}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-md dark-text text-justify">{body}</blockquote>
            </figure>
        </>
    );
};

export function MarqueeDemo() {
    return (
        <>
        <div className="light-back text-center px-10% py-5 text-2xl font-bold">What pepole are saying about us</div>
            <div className="relative flex w-[90%] mx-auto flex-col items-center justify-center overflow-hidden rounded-lg  bg-background">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.course} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.course} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </>
    );
}
export default MarqueeDemo;