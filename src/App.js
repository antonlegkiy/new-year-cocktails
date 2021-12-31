import './App.css';

function App() {
  const cocktails = [{
    img: 'https://thewanderlustkitchen.com/wp-content/uploads/2021/10/Espresso-Martini-Recipe-157-Square-720x720.jpg',
    name: 'Эспрессо Мартини',
    ingredients: ['1oz Кофейный ликер', '1oz Водка', '1oz Эспрессо', '0.25 Сахарный сироп', 'Вспрыск лимона']
  }, {
    img: 'https://autogear.ru/misc/i/gallery/109904/2963385.jpg',
    name: 'Космополитен',
    ingredients: ['1.5oz Водка', '1oz Клюквенный сок', '0.5oz Квантро (цитрусовый ликер)', '0.25oz Сок Лайма']
  }, {
    img: 'https://cdn.diffords.com/contrib/stock-images/2021/01/6014303495109.jpg',
    name: 'Доминикана',
    ingredients: ['1.5oz Кофейный ликер', '1.5oz Выдержанный Ром', 'Сливки']
  }, {
    img: 'https://imbibemagazine.com/wp-content/uploads/2017/08/lite-treason-horizontal-crdt-charles-campos.jpg',
    name: 'Белый Русский',
    ingredients: ['1oz Водка', '1oz Кофейный ликер', 'Сливки']
  }];

  return (
    <div className="cocktail-container">
      {cocktails.map((cocktail) => {
        return (
            <div className="cocktail-item">
              <img src={cocktail.img} alt="cocktail-picture"/>
              <div className="cocktail-description">
                <h2>{cocktail.name}</h2>
                <p>{cocktail.ingredients.join(', ')}</p>
              </div>
            </div>
        );
      })}
    </div>
  );
}

export default App;
