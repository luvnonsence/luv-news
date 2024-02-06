import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';

const NewsItem = ({ item }) => {
	return (
		<li className={styles.item}>
			<div className={styles.wrapper} style={{ backgroundImage: `url(${item.image})` }}></div>
			<a href={item.url} target="_blank" rel="noopener noreferrer" className={styles.info}>
				<h3 className={styles.title}>{item.title}</h3>
				<div className={styles.extra}>
					{formatTimeAgo(item.published)} by {item.author}
				</div>
			</a>
		</li>
	);
};

export default NewsItem;
