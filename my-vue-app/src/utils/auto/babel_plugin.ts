const checkHasLoggerId = (attributes) => {
    return attributes.some((attr) => attr.name.name === 'data-logger-id');
};
export default function transformNode(node) {
    // 自定义的节点转换逻辑
    if (node.type === 1 /* ELEMENT */) {
        const onClick = node.props.find(p => p.type === 7 /* DIRECTIVE */ && p.name === 'on' && p.arg.content === 'click');
        if (onClick && onClick.exp) {
            onClick.exp.content = `_trackClickEvent($event, () => {${onClick.exp.content}})`;
        }
    }
}

