import React, { PureComponent, Fragment } from 'react';
import Item from './Item';
import urTurn from '../../../assets/urturn.png';
import evaResume from '../../../assets/evaResume.png';
import todoList from '../../../assets/todoList.png';
import './index.css';

export default class Portfolio extends PureComponent {
	state = {
		projects: [
			{
				id: '001',
				name: 'Resume',
				description: 'React',
				img: evaResume,
				webSrc: '/home',
				internal: true,
				githubSrc: 'https://github.com/evatitan/perfil'
			},
			{
				id: '002',
				name: 'TodoList',
				description: 'react-redux',
				img: todoList,
				webSrc: '/portfolio/todoList',
				internal: true,
				githubSrc: 'https://github.com/evatitan/ReactApps'
			},
			{
				id: '003',
				name: 'UrTurn',
				description: 'Angular',
				img: urTurn,
				internal: false,
				webSrc: 'https://urturn.herokuapp.com/',
				githubSrc: 'https://github.com/evatitan/UrTurn'
			}
		],
		hasError: ''
	};

	static getDerivedStateFromError(error) {
		return { hasError: error };
	}

	componentDidCatch(error) {
		console.log(error);
	}

	render() {
		const { projects } = this.state;
		return (
			<Fragment>
				<div className="page-portfolio">
					<div className="columns is-mobile is-multiline is-centered myColumns">
						{this.state.hasError ? (
							<h2>The internet is bad, please try it later.</h2>
						) : (
							projects.map((projectObj) => {
								return <Item key={projectObj.id} {...projectObj} />;
							})
						)}
					</div>
				</div>
			</Fragment>
		);
	}
}
