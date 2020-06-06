import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default (story) => {
  return (
    <div className="card">
      <Header {...story} />
      <Body {...story} />
      <Footer {...story} />
    </div>
  );
};
