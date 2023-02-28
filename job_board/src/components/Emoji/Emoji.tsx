type EmojiProps = {
  symbol: string;
};

const Emoji = ({ symbol }: EmojiProps) => {
  return (
    <span className="emoji" role="img">
      {symbol}
    </span>
  );
};

export default Emoji;
