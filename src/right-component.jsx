import illustrationDesktop from './assets/images/illustration-sign-up-desktop.svg'
function RightComponent() {
const isMobile = window.innerWidth < 375;

  return <div>
    <picture>
      <source media="(min-width:1001)"  srcSet={illustrationDesktop} />
      <source media="(min-width:701)"  srcSet="./assets/images/illustration-sign-up-tablet.svg" />
      <source media="(max-width:700)"  srcSet="./assets/images/illustration-sign-up-mobile.svg" />
    <img className='right-component-image' src={illustrationDesktop}/>
    </picture>
  </div>;
}
export default RightComponent;
