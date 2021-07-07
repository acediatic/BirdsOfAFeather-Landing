import Mentor from "../images/Mentor.svg";
import Mentee from "../images/Mentee.svg";
import Both from "../images/Both.svg";
import Executive from "../images/Executive.svg";
import Logo from "../images/boaf-logo.png";

// Credit: https://github.com/hasinhayder/tailwind-cards/blob/master/index.html

function MemberTypes() {
  return (
    <section className="container mx-auto py-10 md:py-20 antialiased">
      <h1 className="text-4xl md:text-4xl font-extrabold text-center leading-tighter tracking-tighter mb-8">
        How Does It Work?
      </h1>
      <section className="align-middle flex">
        <span>
          <p className="m-4 text-lg p-4 pb-0 leading-relaxed">
            The club has three primary offerings:
          </p>
          <ol className="m-4 ml-8 text-lg p-4 pb-0 leading-relaxed list-decimal list-inside">
            <li>Tutoring younger (school age) students in basic coding.</li>
            <li>
              Mentorship (any age)
              <ul className="list-disc list-inside ml-4 md:ml-8">
                <li>Internship/CV/interview guidance</li>
                <li>University papers support</li>
                <li>Life advice 😊</li>
              </ul>
            </li>
            <li>Tutoring younger (school age) students in basic coding.</li>
            <li>
              Events around the above two objectives.
              <ul className="list-disc list-inside ml-4 md:ml-8">
                <li>
                  “Speed dating” type mentorship event, from real developers in
                  industry.
                </li>
                <li>More!</li>
              </ul>
            </li>
          </ol>
          <p className="m-4 text-lg p-4 pb-0 leading-relaxed">
            Coding tuition is completed using CodeHS. It can be done remotely,
            and is very straightforward if you understand the fundamentals in
            the programming language you’re teaching. In essence, all lesson
            content is pre-prepared, which means all you need to do is show up,
            sign in with your student and pick up where you left off.
          </p>
        </span>
        <span className="w-full h-full content-center align-middle">
          <img
            className="w-300 h-300 p-32 align-middle "
            src={Logo}
            alt="Logo"
          />
        </span>
      </section>
      <h2 className="m-16 text-3xl font-extrabold text-center leading-tighter tracking-tighter mb-8">
        Club Roles
      </h2>

      <section className="grid grid-cols-1 gap-8">
        <article className="mx-auto w-full pb-8 bg-cover bg-center transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img className="mx-auto mt-10 w-40" src={Mentor} alt="" />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Mentor
          </h2>

          <p className="m-4 text-lg p-4 pb-0 leading-relaxed ">
            Being a mentor will likely involve the following:
          </p>
          <ol className="m-4 text-lg p-4 pb-0 leading-relaxed list-decimal list-inside">
            <li>
              Providing contact details (as preferred, minimum UoA email) for
              people to get in touch with you
            </li>
            <li>
              Have brief coffee/conversation with mentees, providing advice and
              support where you can.
            </li>
            <li>
              Tutoring mentees in basic coding (typically low-decile school
              students)
            </li>
          </ol>
          <p className="m-4 text-lg p-4 pb-0 leading-relaxed ">
            Commitments can be scaled up and down to suit your schedule - it’s
            all up to you.
          </p>

          <h3 className="text-center text-2xl mt-8 font-bold min-h-18 px-12">
            Perks
          </h3>
          <ul className="m-4 text-lg p-4 pb-0 leading-relaxed list-disc list-inside">
            <li>
              <b>The satisfaction of knowing you’ve helped people.</b>{" "}
              Seriously. It’s a pretty amazing feeling.
            </li>
            <li>
              <b>Better job prospects.</b> Employers love to see support in the
              community. Also, to teach, you have to know what you’re talking
              about. This helps prove your knowledge to a potential employer.
            </li>
            <li>
              <b> Your teaching experience is certified </b>through an official
              report of all hours worked or volunteered. This could be a
              powerful supporting document for your resume.
            </li>
          </ul>
        </article>

        <article className="mx-auto w-full pb-8 bg-cover bg-center  transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img className="mx-auto  mt-10 w-40" src={Mentee} alt="" />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Mentee
          </h2>

          <p className="m-4 text-lg p-4 pb-0 leading-relaxed ">
            Being a mentee will likely involve the following:
          </p>
          <ol className="m-4 text-lg p-4 pb-0 leading-relaxed list-decimal list-inside">
            <li>Reaching out to a mentor that you would like help from</li>
            <li>
              Being respectful of their time, being on time and having thought
              about what questions you might like to ask.
            </li>
            <li>Learning as much as you can!</li>
          </ol>
          <p className="m-4 text-lg p-4 pb-0 leading-relaxed ">
            Hopefully, the perks are obvious!
          </p>
        </article>

        <article className="mx-auto w-full pb-8 bg-cover bg-center  transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img className="mx-auto  mt-10 w-40" src={Both} alt="" />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Both!
          </h2>

          <p className="m-4 text-lg p-4 pb-0 leading-relaxed ">
            Mentors and mentees are not mutually exclusive roles! You are
            welcome to be participating in both - in fact, we encourage it!
            There’s always more to learn.
          </p>
        </article>

        <article className="mx-auto w-full pb-8 bg-cover bg-center  transform duration-500 hover:-translate-y-1 shadow-2xl rounded-xl">
          <img className="mx-auto  mt-10 w-40" src={Executive} alt="" />
          <h2 className="text-center text-3xl mt-8 font-bold min-h-18 px-12">
            Executive
          </h2>

          <p className="m-4 text-lg p-4 pb-0 leading-relaxed ">
            Being a member of the executive will likely involve the following:
          </p>
          <ol className="m-4 text-lg p-4 pb-0 leading-relaxed list-decimal list-inside">
            <li>
              Managing relationships with partner schools/groups to provide
              tuition to their students
            </li>
            <li>
              Helping to expand the club to help as many students as possible,
              without compromising quality.
            </li>
            <li>Helping organise events</li>
          </ol>
          <h3 className="text-center text-2xl mt-8 font-bold min-h-18 px-12">
            Perks
          </h3>
          <ul className="m-4 text-lg p-4 pb-0 leading-relaxed list-disc list-inside">
            <li>
              The usual cool club perks, like merch, free food, and a great role
              for your CV.
            </li>
            <li>
              Mentor perks <i>+ 100xp points.</i>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default MemberTypes;
