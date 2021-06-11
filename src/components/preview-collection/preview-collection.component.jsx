import './preview-collection.styles.css';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter().map((item) => (
          <div key={item.id} className="">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
