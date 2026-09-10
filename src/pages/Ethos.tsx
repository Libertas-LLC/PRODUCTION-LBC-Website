import SiteNav from "../components/SiteNav";
import SiteFooter from "../components/SiteFooter";

// The LBC Ethos — the community's guiding statement. The internal approval
// note from the source doc is intentionally omitted (not public copy).
const behaviors: { term: string; text: string }[] = [
  {
    term: "Generous Collaboration.",
    text: "We freely share our insights, experiences, and challenges to help one another grow. This group prioritizes collaboration over competition. We show up with open hands, not closed fists.",
  },
  {
    term: "Relational over Transactional.",
    text: "We invest in real connection. This is a space for trust and authenticity. We care more about who someone is than what they do.",
  },
  {
    term: "Humbly Curious.",
    text: "We listen first, ask with interest, and stay open to growth. There is no room for ego here. We assume we always have something to learn from one another.",
  },
  {
    term: "Grace and Truth.",
    text: "We care for one another and we are there when someone needs us. We also tell each other the truth we need to grow. Grace makes it safe to be honest. Truth makes the honesty worth something.",
  },
  {
    term: "For Each Other.",
    text: "We care for one another. We notice when someone is running on empty, and we help. We celebrate each other's wins like they are our own, and we say so out loud. We lift, we connect, we show up.",
  },
  {
    term: "We Lead.",
    text: "We engage, equip, and empower the leaders around us. We lead by example in how we show up, how we speak, and how we serve. When something needs doing, we do it. When someone needs a hand, we are the hand.",
  },
];

const Ethos = () => (
  <div className="font-sans antialiased text-[#121212] min-h-screen flex flex-col bg-[#F1EDE6]">
    <SiteNav fixed={false} />

    {/* Thread divider, matching the other pages */}
    <div className="w-full">
      <img
        src="/Assets/thread_image.png"
        alt=""
        className="w-full h-auto max-h-5 object-cover block"
      />
    </div>

    <div className="container mx-auto px-6 py-16 md:py-24 flex-1">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D47558] uppercase text-center mb-3">
          The LBC Ethos
        </h1>
        <p className="italic text-lg text-gray-600 text-center mb-12">
          Building Business Together
        </p>

        <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
          <p>
            Entrepreneurs are the threads that hold the fabric of a community
            together. I am one of those threads. I chose to build something that
            matters, and I know the quiet truth that comes with it: the more you
            carry, the easier it is to feel like you are carrying it alone. I
            have decided to stop building alone. I am a Collaborator.
          </p>
          <p>
            The Local Business Collaborative is a convergent space. The
            community is the product, and the room is what makes it possible.
            Some of us office here every day. Most of us do not. All of us
            belong. What happens here is shaped by the people who show up, so I
            show up. Present, prepared, and focused on the people around me.
          </p>
          <p>
            I lead with a servant's heart. I come to give before I come to get.
            I invest in trust, share what I know, create connections, and serve
            before anyone asks. Good business will come out of the relationships
            built here. That is the fruit of trust, never the reason I walked in
            the door.
          </p>
          <p>
            I choose collaboration over competition. The leader across the table
            is not my rival. They are my neighbor, carrying something a lot like
            what I carry. I lift them up. I look for ways to connect them with
            the people and opportunities they were built to serve. I credit the
            people and organizations already doing good work, and I invite them
            in.
          </p>
          <p>
            This community is mine to care for. The LBC belongs to the people
            who show up for it, and I am one of them. I take ownership of its
            culture and I protect it. Whether someone runs a business, is
            building one, or is dreaming about one, they belong here. I hold the
            door open, and I leave this place better every time I walk through
            it.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-[#D47558] uppercase text-center mt-16 mb-3">
          How We Behave
        </h2>
        <p className="italic text-gray-600 text-center mb-10">
          These are the non-negotiables. They are what it takes to be part of
          this group.
        </p>

        <div className="space-y-6">
          {behaviors.map((b) => (
            <div key={b.term} className="border-l-4 border-[#F5A623] pl-6">
              <p className="text-gray-800 leading-relaxed">
                <span className="font-bold text-[#121212]">{b.term}</span>{" "}
                {b.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6 text-lg text-gray-800 leading-relaxed">
          <p>
            This is my standard. I will hold it, and I will help
            the Collaborators around me hold it too.
          </p>
          <p>When the threads are strong, the community is too.</p>
        </div>

        <p className="mt-10 text-2xl md:text-3xl font-bold text-center text-[#D47558]">
          Business is better together.
        </p>
      </div>
    </div>

    <SiteFooter />
  </div>
);

export default Ethos;
