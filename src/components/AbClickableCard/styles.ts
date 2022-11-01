const styles: { [name: string]: AbClickableCardStyles } = {
  main: {
    titleVariant: 'h6',
    color: 'gray',
    padding: 2,
    bottom: 0,
    width: 390,
    height: 260,
    image: '/public/assets/images/misc/400x600_fallbackAbairImage.jpg',
  },
  app: {
    titleVariant: 'body1',
    color: 'gray',
    padding: 1,
    bottom: 0,
    width: 330,
    height: 220,
    image: '/public/assets/images/misc/400x400_fallbackAbairImage.jpg',
  },
};

interface AbClickableCardStyles {
  titleVariant: 'h5' | 'h6' | 'body1';
  color: string;
  padding: number;
  bottom?: number;
  width: number;
  height: number;
  image: string;
}

interface AbClickableCardProps {
  image?: string;
  title?: string;
  description?: string;
  handleClickEvent?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variation: 'main' | 'app' | 'sCapp';
  borderColor?: 'primary' | 'secondary' | 'warning';
}

export type { AbClickableCardStyles, AbClickableCardProps };

export default styles;
