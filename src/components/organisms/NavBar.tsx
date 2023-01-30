import { DateComponent } from '../atoms/DateComponent'
import { SearchInput } from '../atoms/SearchInput'
import { UserImage } from '../molecules/UserImage'
import { Welcome } from '../atoms/Welcome'

export const NavBar = () => {
  return (
    <nav className="navbar max-h-10 justify-between bg-aside_black px-4 shadow-md">
      <Welcome />
      <aside>
        <SearchInput />
        <DateComponent />
        <UserImage />
      </aside>
    </nav>
  )
}
