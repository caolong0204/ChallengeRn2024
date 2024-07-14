import React from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';
import QuickSight from './quicksight';
enum WebViewType {
  Link = 'Link',
  Content = 'Content',
}
export default function DemoWebView() {
  const typeWebview = WebViewType.Link;
  if (typeWebview === WebViewType.Link) {
    return (
      <WebView source={{ uri: 'http://localhost:3000/review-summary' }} style={{ flex: 1 }} />
    );
  }
  if (typeWebview === WebViewType.Content) {
    const htmlContent = `
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
     ${QuickSight()}
    </body>
    </html>
  `;

    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        javaScriptEnabled={true}
        style={{ flex: 1 }}
      />
    );
  }
  return <Text>No type webview</Text>;
}
