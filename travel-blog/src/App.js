import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import './App.scss';

function App() {
  return (
    <div className="app">
      {/* Navigation Bar */}
      <div className="navbar">
        <div className="header">
          <div className="header__title">Travelize</div>
          <div className="header__subheader">My traveling experiences</div>
        </div>
        <nav className="menu">
          <a href="/" className="menu__item">Home</a>
          <a href="/blog" className="menu__item">Blog</a>
          <a href="/about" className="menu__item menu__item--primary">About</a>
        </nav>
      </div>

      {/* Hero */}
      <div className="hero">
        <img className="hero__img" src={heroBackground} alt="lake"/>
      </div>

      {/* Content */}
      <div className="container">
        <div className="profile">
          <img className="profile__img" src={headshot} alt="Profile Headshot" />
        </div>
        <div className="content">
          <div className="content__title">A little about me</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus integer feugiat scelerisque varius morbi. Tincidunt augue interdum velit euismod. Neque gravida in fermentum et sollicitudin. In nibh mauris cursus mattis. Est pellentesque elit ullamcorper dignissim cras. 
            <br/><br/>
            Risus quis varius quam quisque id diam vel quam elementum. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Varius duis at consectetur lorem donec massa sapien faucibus et. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Mauris augue neque gravida in fermentum et. 
            <br/><br/>
            Scelerisque fermentum dui faucibus in ornare quam viverra. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Vel fringilla est ullamcorper eget. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit duis. Pulvinar elementum integer enim neque volutpat ac tincidunt. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. 
            <br/><br/>
            Tincidunt nunc pulvinar sapien et ligula ullamcorper. Aliquet eget sit amet tellus cras adipiscing enim. Suspendisse ultrices gravida dictum fusce. Massa eget egestas purus viverra accumsan in. Eu lobortis elementum nibh tellus molestie nunc non blandit. Velit egestas dui id ornare arcu odio ut sem. Nisl pretium fusce id velit ut tortor pretium. Nunc pulvinar sapien et ligula. In eu mi bibendum neque egestas congue quisque egestas diam. Tempus egestas sed sed risus pretium. 
            <br/><br/>
            Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Elementum curabitur vitae nunc sed. Magna ac placerat vestibulum lectus mauris ultrices. Dui sapien eget mi proin sed libero enim. Posuere ac ut consequat semper viverra nam. Tempor nec feugiat nisl pretium fusce. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Nulla pharetra diam sit amet. Duis at tellus at urna condimentum mattis pellentesque id nibh.
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__copyright">&copy; 2020 Travelize</div>
        <div className="footer__privacy">Privacy Policy Terms and conditions</div>
      </footer>
    </div>
  );
}

export default App;
