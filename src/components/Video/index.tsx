interface IVideo {
  link: string;
}

const Video = ({ link }: IVideo) => {
  return <video controls src={link}></video>;
};

export default Video;
