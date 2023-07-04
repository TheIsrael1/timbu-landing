interface IVideo {
  link: string;
}

const Video = ({ link }: IVideo) => {
  return (
    <iframe
      className="w-full h-full"
      src={link}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
