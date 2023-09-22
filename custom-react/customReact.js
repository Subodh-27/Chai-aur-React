function customRender(reactEl, container) {
    /* const domElement = document.createElement(reactEl.type);
    domElement.innerHTML = reactEl.children;
    domElement.setAttribute('href', reactEl.props.href);
    domElement.setAttribute('target', reactEl.props.target);
    container.appendChild(domElement); */

    const domElem = document.createElement(reactEl.type);
    domElem.innerHTML = reactEl.children;

    for (const prop in reactEl.props) {
        if (prop === 'children') continue;

        domElem.setAttribute(prop, reactEl.props[prop]);
    }

    container.appendChild(domElem);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
};

const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);