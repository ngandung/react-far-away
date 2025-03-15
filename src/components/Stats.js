export default function Stats({ items }) {
  console.log(items.length);
  if (!items.length) {
    return (
      <footer className="stats">
        Start adding items to your packing list 🚀
      </footer>
    );
  }


  const numItem = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const persentage = Math.round((packedItem / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {persentage === 100
          ? "You got everyting! Ready to go ✈"
          : `💼 You have ${numItem} items on your list, and you already packed ${packedItem} (${persentage}%)`}
      </em>
    </footer>
  );
}
