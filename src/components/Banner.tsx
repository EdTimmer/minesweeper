import { useStore } from '../store';
import { BannerWrapper } from './Banner.css';

interface BannerProps {
  message: string;
}

const Banner = ({ message }: BannerProps) => {
  const isVictory = useStore((state) => state.isVictory);
  const isFinished = useStore((state) => state.isFinished);
  return (
    <BannerWrapper isVictory={isVictory} isFinished={isFinished}>
      {message}
    </BannerWrapper>
  );
};

export default Banner;
