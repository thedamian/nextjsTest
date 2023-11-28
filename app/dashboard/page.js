
import AddItem from '@/app/dashboard/AddItem'
import DisplayWishList from '@/app/dashboard/DisplayWishList'

export default function Dashboard(){

    return(
        <section className='flex flex-row'>
            <DisplayWishList />
            <AddItem/>
        </section>
    )
}