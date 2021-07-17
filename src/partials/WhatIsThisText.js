import BounceRegisterOnce from "../utils/BounceRegisterOnce";

const MotivationText = (props) => {
  //   const { registerLink } = props;
  return (
    <div className="text-xl text-gray-600">
      <p>
        Birds of a Feather is the conception of two students at the University
        of Auckland.
      </p>
      <br />
      <p>
        Through nothing but cosmic coincidence, we possess all attributes for
        privilege in modern society. This has resulted in our lives being almost
        barrier-free, whilst others with different circumstances struggle
        against challenges that we will seldom even see, let alone fully
        understand.
      </p>
      <br />
      <p>
        Today, equal access is not equal opportunity. This just
        <b> doesn’t sit right</b> with us.
      </p>
      <br />
      <p>
        We are facing unprecedented challenges as a global community. From
        resolving the climate crisis to safely navigating the perils of
        artificial intelligence, it’s clear that we will need to think
        differently than we have done in the past.
      </p>
      <br />
      <p>
        It is certain that we need a more diverse and equitable workforce across
        the board to make this happen. Truly accessible and equitable education
        is so much more than a ‘politically correct’ ideal: it is the first step
        towards this future.
      </p>
      <br />
      <p>
        That’s why we founded Birds of a Feather - to break down some of the
        barriers we’ve seen in STEM, especially Software development, to build
        bridges in their place.
      </p>
      <br />
      <p>
        Birds of a Feather aims to be a haven of learning, collaboration, and
        mentorship; a community built upon love and respect, where those further
        on in their career and life journey can lend support to those in earlier
        stages.
      </p>
      <br />
      <p>
        From the start, it was clear that we couldn’t do this alone. We needed
        to build a solution based not on what we thought would solve these
        problems from our perspectives alone, but based on down-to-earth
        information from the members of the diverse and beautiful communities we
        aim to serve.
      </p>
      <br />
      <p>
        Beginning with the two of us, a ‘coalition of the willing’ began to take
        shape as we spoke with a range of people from many different walks of
        life. Those who resonated with our mission came to waddle alongside us,
        each contributing to the shape and direction of the club.
        <b>We’d love for you to be a part of this too.</b>
      </p>
      <br />
      <p>
        If this sounds like it could be for you, please{" "}
        <button
          className="bg-clip-text text-transparent cursor-pointer bg-gradient-to-r from-blue-500 to-teal-400"
          onClick={BounceRegisterOnce}
        >
          register your interest.
        </button>
      </p>
      <br />
    </div>
  );
};

export default MotivationText;
