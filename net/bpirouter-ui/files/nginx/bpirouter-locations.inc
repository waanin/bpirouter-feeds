location /rpc {
    proxy_pass http://127.0.0.1:8080/rpc;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_read_timeout 30s;
    proxy_send_timeout 30s;
    client_max_body_size 2m;
}
location /health {
    proxy_pass http://127.0.0.1:8080/health;
}
location /cgi-bin/luci {
    proxy_pass http://127.0.0.1:8081;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_buffering off;
}
location /luci-static {
    proxy_pass http://127.0.0.1:8081;
}
location /static {
    expires 30d;
    add_header Cache-Control "public, immutable";
}
location / {
    try_files $uri $uri/ /index.html;
}
