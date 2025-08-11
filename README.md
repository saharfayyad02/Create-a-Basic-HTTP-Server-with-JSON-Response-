# Node.js Core Modules: `http`, `http2`, and `https`

## Overview
This document compares three core Node.js modules — `http`, `http2`, and `https` — including their purposes, key differences, and real-world usage.

---

## Comparison Table

| Module     | Purpose | Key Features / Protocol Used | When to Use |
|------------|---------|------------------------------|-------------|
| **`http`** | Provides an API to create HTTP servers and clients using **HTTP/1.1**. | - Text-based protocol (human-readable)<br>- Persistent connections (keep-alive)<br>- Pipelining support<br>- Chunked responses<br>- Content negotiation & Host header support | Use for simple web servers, APIs, or services where HTTP/1.1 is sufficient and HTTP/2 performance improvements are not required. |
| **`http2`** | Provides an API to create HTTP/2 servers and clients. | - **Binary protocol** (not human-readable)<br>- **Multiplexing**: multiple requests over a single connection<br>- **Header compression** (HPACK)<br>- Server push capability<br>- Backward compatible with HTTP/1.1 if needed | Use for high-performance web applications, APIs serving many requests per client, and scenarios needing faster load times with fewer TCP connections. |
| **`https`** | Provides an API to create secure HTTP servers and clients using **TLS/SSL**. | - Encrypted communication via TLS<br>- Based on HTTP/1.1 by default (can also be used with HTTP/2)<br>- Prevents eavesdropping and man-in-the-middle attacks | Use whenever security is needed — e.g., handling sensitive user data, authentication, e-commerce transactions, and protecting APIs. |

---

## Key Technical Differences: HTTP/1.1 vs HTTP/2

| Feature | HTTP/1.1 | HTTP/2 |
|---------|----------|--------|
| **Protocol Type** | Text-based | Binary |
| **Connections** | One request per connection (pipelining allows some overlap but is limited) | Multiplexed: many requests in parallel over one connection |
| **Header Handling** | Sent in full with each request | Compressed with HPACK |
| **Server Push** | Not supported | Supported (server can push resources before client requests them) |
| **Performance** | Adequate for simple/low-traffic apps | Optimized for modern, complex, and high-traffic applications |

---

## Real-World Examples

- **`http`**:  
  Building a lightweight REST API for internal services or testing purposes.

- **`http2`**:  
  Serving a high-traffic single-page application with many assets (CSS, JS, images) to reduce latency.

- **`https`**:  
  E-commerce site with encrypted checkout, secure login systems, or APIs handling sensitive data.
