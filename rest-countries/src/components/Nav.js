import ThemeChanger from './ThemeChanger';
   
function Nav(){
 const siteHeader = "Where in the world?"
    return <div>
    <nav>
      <label>{siteHeader}</label>
      <ThemeChanger/>
    </nav>
  </div>

}
export default Nav