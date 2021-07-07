export const WhakapapaText = [
  {
    text: `The privilege of living and working in New Zealand, and on this earth.
        We are all responsible for protecting the land in return.`,
  },
  {
    text: `Those who came before: our ancestors and creators of the knowledge we inherit - we all stand on the shoulders of these giants.`,
  },
  {
    text: `Those who support us, including our friends, our whanau and the wider community.`,
  },
  {
    text: `The responsibility we have to ourselves, our local, national and global communities, both present and future.`,
  },
];

export const Whakapapa = (props) => {
  const {text} = props;
  return (
    <div
      className={`flex items-center text-lg p-5 rounded border mb-3 "bg-white shadow-md border-gray-200 hover:shadow-lg`}
    >
      <div>
        <div className="font-bold leading-snug tracking-tight mb-1">
          We acknowledge...
        </div>
        <div className="text-gray-600">{text}</div>
      </div>
    </div>
  );
};
