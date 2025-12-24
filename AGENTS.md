Project: Prime Tech Services – Backend



Goal:

Provide REST APIs for:

\- Electronics repair bookings

\- Software purchase orders

\- User accounts and authentication.



Hosting:

\- IONOS VPS (Ubuntu 24.04).

\- Behind NGINX reverse proxy.



Domain Strategy (must NOT be hardcoded):

\- API Base URL: https://api.primetechservices.co.uk

\- Frontend Origin: https://www.primetechservices.co.uk



Environment variables (mandatory):

\- PUBLIC\_BASE\_URL

\- CORS\_ORIGIN

\- PORT



Requirements:

\- Application must bind to 0.0.0.0 using PORT.

\- CORS must allow only the configured frontend origin.

\- JWT-based authentication is recommended.

\- No frontend UI code in this repository.



