import CartSheet from './CartSheet';
import PageTitle from './PageTitle';

export default function TopBar() {
    return (
        <header className="flex p-4 items-center flex-grow justify-between">
            <PageTitle />
            <CartSheet />
        </header>
    );
}
