import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image';
import styles from './styles.module.css';

const NewsBanner = ({ item }) => {
	return (
		<div className={styles.banner}>
			<Image image={item.image} />
			<h3 className={styles.title}>{item.title}</h3>
			<div className={styles.extra}>
				{formatTimeAgo(item.published)} by {item.author}
			</div>
		</div>
	);
};

export default NewsBanner;
