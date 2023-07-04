import './specials.css';
import { Link } from 'react-router-dom';
import GreekSalad from '../../assets/greeksalad.png';
import Bruscheta from '../../assets/bruscheta.png';
import LemonDessert from '../../assets/lemondessert.jpg';
import SpecialsCards from '../../components/specialsCards/specialsCards';

export default function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h1>This week's specials</h1>
        <Link className="action-button" to="/menu">Online Menu</Link>
      </article>

      <section className="specials-cards">
        <SpecialsCards image={GreekSalad} name="Greek Salad" price="$12.99" description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives. Dressed with salt, hot pepper, and olive oil." />
        <SpecialsCards image={Bruscheta} name="Bruschetta" price="$16.99" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with salt and olive oil." />
        <SpecialsCards image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus and lemon zest." />
      </section>

    </section>
  );
}