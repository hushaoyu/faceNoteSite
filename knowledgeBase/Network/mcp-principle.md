---
title: "MCP 原理"
category: "Network"
tags: ["mcp", "tcp", "protocol"]
difficulty: "中等"
---

# MCP 原理

## 什么是 MCP

MCP（Master Control Program）是 TCP/IP 协议栈中的核心组件，负责管理网络连接和数据传输。

## TCP 三次握手

```
客户端          服务器
  |                |
  |----SYN------->|
  |                |
  |<---SYN+ACK----|
  |                |
  |----ACK------->|
  |                |
  连接建立
```

## TCP 四次挥手

```
客户端          服务器
  |                |
  |----FIN------->|
  |                |
  |<---ACK--------|
  |                |
  |<---FIN--------|
  |                |
  |----ACK------->|
  |                |
  连接关闭
```

## MCP 核心功能

### 1. 连接管理
- 建立连接（三次握手）
- 断开连接（四次挥手）
- 连接复用

### 2. 数据传输
- 分段与重组
- 可靠传输（重传机制）
- 流量控制

### 3. 拥塞控制
- 慢启动
- 拥塞避免
- 快速重传/恢复

## 状态机

```
LISTEN -> SYN_RCVD -> ESTABLISHED
                          |
                    FIN_WAIT_1 -> FIN_WAIT_2 -> TIME_WAIT -> CLOSED
                          |
                    CLOSING -> LAST_ACK -> CLOSED
```

## 关键参数

- **MSS**: 最大分段大小
- **MTU**: 最大传输单元
- **TTL**: 生存时间
- **窗口大小**: 流量控制