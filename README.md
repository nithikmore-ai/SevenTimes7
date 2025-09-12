# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Running on an AWS EC2 Instance

Follow these steps to deploy and run this Next.js application on an AWS EC2 instance.

### 1. Set Up Your EC2 Instance

1.  **Launch an EC2 Instance**: Start a new EC2 instance from the AWS Management Console. A good choice for the Amazon Machine Image (AMI) is **Amazon Linux** or **Ubuntu**.
2.  **Configure Security Group**: Create a new security group or edit the instance's existing one to allow inbound traffic on port 3000. Add a new rule with the following settings:
    *   **Type**: Custom TCP
    *   **Port Range**: `3000`
    *   **Source**: Anywhere (`0.0.0.0/0`) or your specific IP address for better security.
3.  **Connect to Your Instance**: Use SSH to connect to your newly created EC2 instance.

### 2. Install Dependencies

Once connected to your instance, you need to install Node.js, which is required to run the application.

**For Amazon Linux:**
```bash
sudo yum install -y nodejs
```

**For Ubuntu:**
```bash
sudo apt-get update
sudo apt-get install -y nodejs npm
```

### 3. Deploy and Run the Application

1.  **Clone Your Repository**: Clone your project's repository onto the EC2 instance.
    ```bash
    git clone <your-repository-url>
    cd <your-project-directory>
    ```

2.  **Install Project Dependencies**: Install all the necessary packages defined in `package.json`.
    ```bash
    npm install
    ```

3.  **Build the Application**: Create an optimized production build of your Next.js app.
    ```bash
    npm run build
    ```

4.  **Start the Production Server**: Run the application. By default, it will start on port 3000.
    ```bash
    npm run start
    ```

Your application should now be running! You can access it by navigating to `http://<your-ec2-instance-public-ip>:3000` in your web browser.

### (Optional) Keep the App Running with PM2

To ensure your application continues running even after you close your SSH session, it's recommended to use a process manager like `pm2`.

1.  **Install PM2**:
    ```bash
    sudo npm install -g pm2
    ```

2.  **Start Your App with PM2**:
    ```bash
    pm2 start npm --name "my-next-app" -- start
    ```

3.  **Manage Your App**: You can now manage your application with commands like `pm2 list`, `pm2 stop my-next-app`, and `pm2 restart my-next-app`.
