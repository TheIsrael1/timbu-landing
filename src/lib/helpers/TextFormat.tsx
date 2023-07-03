interface IFormatKeywordInString {
  text: string;
  keyword: string;
  keywordClassName: string;
}

const TextFormat = ({
  keyword,
  text,
  keywordClassName,
}: IFormatKeywordInString) => {
  const index = text.indexOf(keyword);

  if (index === -1) {
    return <span>{text}</span>;
  }

  const beforeKeyword = text.slice(0, index);
  const afterKeyword = text.slice(index + keyword.length);

  return (
    <span>
      {beforeKeyword}
      <span className={keywordClassName}>{keyword}</span>
      {afterKeyword}
    </span>
  );
};

export default TextFormat;
