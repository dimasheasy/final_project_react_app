import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<ul className={classes.footerList}>
				<li className={classes.footerItem}>
					Создано на React <span className={classes.reactIcon}>⚛</span>
				</li>
				<li className={classes.footerItem}>
					API проекта <a className={classes.footerLink} href='https://kinopoiskapiunofficial.tech/' target='_blank' rel='noreferrer'>Kinopoisk Api Unofficial</a>
				</li>
				<li className={classes.footerItem}>
					Проект на <a className={classes.footerLink} href='https://github.com/dimasheasy/final_project_react_app.git' target='_blank' rel='noreferrer'>GitHub</a>
				</li>
				<li className={classes.footerItem}>
					© by <a className={classes.footerLink} target='_blank' rel='noreferrer' href={'https://github.com/dimasheasy'}>dimasheasy</a>
				</li>
			</ul>
		</footer>
	)
}

export default Footer