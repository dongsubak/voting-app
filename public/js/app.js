class ProductList extends React.Component {
  render() {
    return (
      <div className='ui unstackable items'>
        Hello, basic React component.
      </div>
    );
  }
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);