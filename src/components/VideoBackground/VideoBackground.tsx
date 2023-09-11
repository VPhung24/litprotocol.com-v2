import styles from './video-background.module.scss';

interface VideoBackgroundProps {
  name: string;
}

const VideoBackground = (props: VideoBackgroundProps) => {
  const { name } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay}></div>
      <video autoPlay muted loop playsInline>
        <source src={`/video/${name}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBackground;
