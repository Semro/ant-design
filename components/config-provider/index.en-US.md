---
category: Components
group: Other
title: ConfigProvider
cover: https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg
---

`ConfigProvider` provides a uniform configuration support for components.

## Usage

This component provides a configuration to all React components underneath itself via the [context API](https://facebook.github.io/react/docs/context.html). In the render tree all components will have access to the provided config.

```jsx
import { ConfigProvider } from 'antd';

// ...

export default () => (
  <ConfigProvider direction="rtl">
    <App />
  </ConfigProvider>
);
```

### Content Security Policy

Some components use dynamic style to support wave effect. You can config `csp` prop if Content Security Policy (CSP) is enabled:

```jsx
<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>
  <Button>My Button</Button>
</ConfigProvider>
```

## Examples

<!-- prettier-ignore -->
<code src="./demo/locale.tsx">Locale</code>
<code src="./demo/direction.tsx">Direction</code>
<code src="./demo/size.tsx">Component size</code>
<code src="./demo/theme.tsx">Theme</code>
<code src="./demo/prefixCls.tsx" debug>prefixCls</code>

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoInsertSpaceInButton | Set false to remove space between 2 chinese characters on Button | boolean | true |  |
| componentDisabled | Config antd component `disabled` | boolean | - | 4.21.0 |
| componentSize | Config antd component size | `small` \| `middle` \| `large` | - |  |
| csp | Set [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) config | { nonce: string } | - |  |
| direction | Set direction of layout. See [demo](#components-config-provider-demo-direction) | `ltr` \| `rtl` | `ltr` |  |
| dropdownMatchSelectWidth | Determine whether the dropdown menu and the select input are the same width. Default set `min-width` same as input. Will ignore when value less than select width. `false` will disable virtual scroll | boolean \| number | - | 4.3.0 |
| form | Set Form common props | { validateMessages?: [ValidateMessages](/components/form/#validateMessages), requiredMark?: boolean \| `optional` } | - | requiredMark: 4.8.0 |
| getPopupContainer | To set the container of the popup element. The default is to create a `div` element in `body` | function(triggerNode) | () => document.body |  |
| getTargetContainer | Config Affix, Anchor scroll target container | () => HTMLElement | () => window | 4.2.0 |
| iconPrefixCls | Set icon prefix className | string | `anticon` | 4.11.0 |
| input | Set Input common props | { autoComplete?: string } | - | 4.2.0 |
| locale | Language package setting, you can find the packages in [antd/locale](http://unpkg.com/antd/locale/) | object | - |  |
| prefixCls | Set prefix className | string | `ant` |  |
| renderEmpty | Set empty content of components. Ref [Empty](/components/empty/) | function(componentName: string): ReactNode | - |  |
| space | Set Space `size`, ref [Space](/components/space) | { size: `small` \| `middle` \| `large` \| `number` } | - | 4.1.0 |
| theme | Set theme, ref [Customize Theme](/docs/react/customize-theme-v5) | - | - | 5.0.0 |
| virtual | Disable virtual scroll when set to `false` | boolean | - | 4.3.0 |

### ConfigProvider.config() `4.13.0+`

Setting `Modal`、`Message`、`Notification` rootPrefixCls.

```jsx
ConfigProvider.config({
  prefixCls: 'ant', // 4.13.0+
  iconPrefixCls: 'anticon', // 4.17.0+
});
```

## FAQ

#### How to contribute a new language?

See [&lt;Adding new language&gt;](/docs/react/i18n#Adding-newplanguage).

#### Date-related components locale is not working?

See FAQ [Date-related-components-locale-is-not-working?](/docs/react/faq#Date-related-components-locale-is-not-working?)

#### Modal throw error when setting `getPopupContainer`?

Related issue: <https://github.com/ant-design/ant-design/issues/19974>

When you config `getPopupContainer` to parentNode globally, Modal will throw error of `triggerNode is undefined` because it did not have a triggerNode. You can try the [fix](https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a) below.

```diff
 <ConfigProvider
-  getPopupContainer={triggerNode => triggerNode.parentNode}
+  getPopupContainer={node => {
+    if (node) {
+      return node.parentNode;
+    }
+    return document.body;
+  }}
 >
   <App />
 </ConfigProvider>
```
