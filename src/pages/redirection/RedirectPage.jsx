//css
import './redirect_page.css';
//stores
import useRedirections from '../../store/redirections.store';

const RedirectPage = () => {
  const { redirection_state } = useRedirections();

  return (
    <section className="redirect_locations_container">
      <img
        src={redirection_state.img}
        alt={redirection_state.img}
        className="redirect_locations__img"
      />
      <h1 className="redirect_locations__title">{redirection_state.title}</h1>
      <div className="redirect_locations__description">
        {redirection_state.description}
      </div>
    </section>
  );
};

export default RedirectPage;
