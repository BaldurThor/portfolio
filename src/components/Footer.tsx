import Image from 'react-bootstrap/Image';


const Footer: React.FC = () => {
  return (
    <footer>
      <hr className="mt-5 mb-4" />
      <div className="d-flex justify-content-between">
        <div><p className="text-muted" style={{ fontSize: 20 }}>Created by Baldur Thor</p></div>
        <div className="d-flex justify-content-start gap-1">
          <a className="p-1" href="https://github.com/BaldurThor" target="_blank" rel="noopener"><Image src="github.svg" width="32px" /></a>
          <a className="p-1" href="https://www.linkedin.com/in/baldur-%C3%BE%C3%B3r-j%C3%B3nasson-60836128b/" target="_blank" rel="noopener"><Image src="linkedin.svg" width="32px" /></a>
        </div>
      </div>


      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start gap-1">
          <div><p className="text-muted" style={{ fontSize: 20 }}>In</p></div>
          <div><a href="https://react.dev/" className="align-middle" target="_blank" rel="noopener"><Image src="react.svg" width="32px" /></a></div>
          <div><p className="text-muted" style={{ fontSize: 20 }}>and</p></div>
          <div><a href="https://nextjs.org/" className="align-middle" target="_blank" rel="noopener"><Image src="nextjs.svg" width="32px" /></a></div>
          <div><p className="text-muted" style={{ fontSize: 20 }}>using</p></div>
          <div><a href="https://getbootstrap.com/" className="align-middle" target="_blank" rel="noopener"><Image src="bootstrap-5.svg" width="32px" /></a></div>
          <div><p className="text-muted" style={{ fontSize: 20 }}>and</p></div>
          <div><a href="https://react-bootstrap.netlify.app/" className="align-middle" target="_blank" rel="noopener"><Image src="react-bootstrap.svg" width="32px" /></a></div>
        </div>
        <div>
          <a href="mailto:baldur@baruda.dev" className="align-middle">
            <Image src="envelope.svg" />
            baldur@baruda.dev
          </a>
        </div>
      </div>
    </footer >
  );
};

export default Footer;

