import { MotionConfig, motion } from "framer-motion";

const Testimonial = ({ imgSrc, name, title, company, content }) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-lg border-2 border-zinc-900 bg-white p-8 md:p-12"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="size-24 rounded-lg border-2 border-zinc-900 bg-indigo-200"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
          <span className="text-zinc-600">
            {title} – <span className="text-pink-600">{company}</span>
          </span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.p>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Homemakers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Anjali"
        name="Anjali M."
        title="Homemaker"
        company="Delhi"
        content="Before this platform, I never imagined I could earn from home. Now I complete small writing gigs during my child’s nap time—and it’s empowering!"
      />
    ),
  },
  {
    title: "Retired Teachers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Meera"
        name="Meera D."
        title="Retired Teacher"
        company="Mumbai"
        content="I use my subject knowledge to help students online. Flexible hours and no commute—it’s the perfect second innings for me."
      />
    ),
  },
  {
    title: "Moms with Toddlers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Ritu"
        name="Ritu S."
        title="Full-time Mom"
        company="Lucknow"
        content="With a toddler at home, I thought working was impossible. This platform lets me earn by completing simple data entry tasks during nap time!"
      />
    ),
  },
  {
    title: "Rural Women",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Kusum"
        name="Kusum T."
        title="Tailor"
        company="Rajasthan"
        content="I used to only stitch clothes for my neighbors. Now I get sewing gigs and packaging tasks through this platform—paid directly to my account."
      />
    ),
  },
  {
    title: "Skilled Artists",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Bhavna"
        name="Bhavna L."
        title="Craft Artist"
        company="Indore"
        content="My talent in handicrafts is recognised by others on the app. It’s easy to manage and I’m finally making money from my passion!"
      />
    ),
  },
  {
    title: "Graduates without Jobs",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Neha"
        name="Neha R."
        title="B.Com Graduate"
        company="Patna"
        content="Even with a degree, I couldn’t get a job that fit my home schedule. This platform helped me earn through voiceover gigs and online surveys."
      />
    ),
  },
  {
    title: "Aspiring Writers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Sana"
        name="Sana F."
        title="Content Creator"
        company="Hyderabad"
        content="I love writing, but never knew I could earn from it. I now write short blog posts and product descriptions for small businesses!"
      />
    ),
  },
  {
    title: "Home Bakers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Priya"
        name="Priya K."
        title="Home Baker"
        company="Pune"
        content="I turned my baking hobby into income! I design small custom cake posters through the platform and manage my household as well."
      />
    ),
  },
  {
    title: "College Dropouts",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Nandini"
        name="Nandini A."
        title="Self-Learner"
        company="Bhopal"
        content="I didn’t finish college, but I learned design from YouTube. This platform helped me get paid design gigs without needing a fancy degree."
      />
    ),
  },
];
