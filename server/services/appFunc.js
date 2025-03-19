import { connectToDatabase } from '../func/db.js';

export const getAppById = async (id, user) => {
	const connection = await connectToDatabase();
	try {
		const [app] = await connection.query('SELECT * FROM app WHERE id = ? AND user_id = ?', [id, user]);
		return app.length ? app[0] : {status: false, message: 'Приложение не найдено'};
		} catch (error) {
			throw new Error('Ошибка при запросе к базе данных: ' + error.message);
		} finally {
			await connection.end();
		}
}

export const getAppByUser = async (user) => {
	const connection = await connectToDatabase();
	try {
		const [app] = await connection.query('SELECT * FROM app WHERE user_id = ?', [user]);
		return app.length ? app : { status: false, message: 'Приложения не найдены' };
	} catch (error) {
		throw new Error('Ошибка при запросе к базе данных: ' + error.message);
	} finally {
		await connection.end();
	}
}

export const getAppAll = async () => {
	const connection = await connectToDatabase();
	try {
		const [app] = await connection.query('SELECT * FROM app');
		return app.length ? app : {status: false, message: 'Приложения не найдены'};
	} catch (error) {
		throw new Error('Ошибка при запросе к базе данных: ' + error.message);
	} finally {
		await connection.end();
	}
}


export const updateApp = async (id, user, massive) => {
	const connection = await connectToDatabase();
	try {
		const { name,img,  description, rating, review_count, downloads, age_limit, last_update, images, reviews, similar_apps } = massive;
		const [result] = await connection.execute(
			`UPDATE app 
       SET name = ?,img = ?, description = ?, rating = ?, review_count = ?, downloads = ?, age_limit = ?, last_update = ?, images = ?, reviews = ?, similar_apps = ? 
       WHERE id = ? AND user_id = ?`,
			[name,img, description, rating, review_count, downloads, age_limit, last_update, images, reviews, similar_apps, id, user]
		);

		if (result.affectedRows > 0) {
			return { success: true, message: 'Приложение успешно обновлено' };
		} else {
			return { success: false, message: 'Запись не обновлена. Проверьте правильность id и user_id' };
		}
	} catch (error) {
		throw new Error('Ошибка при запросе к базе данных: ' + error.message);
	} finally {
		await connection.end();
	}
}

export const addApp = async (user, massive) => {
	const connection = await connectToDatabase();
	try {
		const { name, img, description, description2,  rating, review_count, downloads, age_limit, last_update, images, reviews, similar_apps } = massive;
		const [result] = await connection.execute(
			`INSERT INTO app (name, img,  description, description2, rating, review_count, downloads, age_limit, last_update, images, reviews, similar_apps, user_id)
       VALUES (?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
			[name, img,  description, description2, rating, review_count, downloads, age_limit, last_update, images, reviews, similar_apps, user]
		);

		if (result.affectedRows > 0) {
			return {
				success: true,
				message: 'Приложение успешно добавлено',
				appId: result.insertId
			};
		} else {
			return {
				success: false,
				message: 'Не удалось добавить приложение'
			};
		}
	} catch (error) {
		throw new Error('Ошибка при запросе к базе данных: ' + error.message);
	} finally {
		await connection.end();
	}
};


export const deleteApp = async (id, user) => {
	const connection = await connectToDatabase();
	try {
		const [res] = await connection.execute(
			`DELETE FROM app WHERE id = ? AND user_id = ?`,
			[id, user]
		);
		return res.affectedRows > 0
			? { status: true, message: 'Удалено' }
			: { status: false, message: 'Ничего не удалилось' };
	} catch (error) {
		throw new Error('Ошибка при запросе к базе данных: ' + error.message);
	} finally {
		await connection.end();
	}
}