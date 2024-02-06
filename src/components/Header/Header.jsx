import { formatDate } from '../../helpers/formatDate';
import styles from './styles.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Luv News</h1>
			<div>{formatDate(new Date())}</div>
		</header>
	);
};

export default Header;
