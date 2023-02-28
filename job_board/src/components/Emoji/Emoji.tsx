type EmojiProps = {
  symbol: string;
};

const Emoji = ({ symbol }: EmojiProps) => {
  return <span role="img">{symbol}</span>;
};

export default Emoji;
