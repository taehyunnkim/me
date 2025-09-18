export type SkillItem = {
    name: string;
    image: string;
}

export type Skills = {
    category: string;
    items: SkillItem[];
}

export const skills: Skills[] = [
    {
        category: "Languages",
        items: [
            {
                name: "Python",
                image: "/skills/python.png"
            },
            {
                name: "Typescript",
                image: "/skills/typescript.png"
            },
            {
                name: "Java",
                image: "/skills/java.svg"
            },
            {
                name: "Kotlin",
                image: "/skills/kotlin.png"
            },
            {
                name: "SQL",
                image: "/skills/sql.png"
            },
            {
                name: "GoLang",
                image: "/skills/go.png"
            },
            {
                name: "Bash",
                image: "/skills/bash.png"
            },
            {
                name: "Ruby",
                image: "/skills/ruby.png"
            },
        ]
    },
    {
        category: "Tools & Technologies",
        items: [
            {
                name: "React",
                image: "/skills/react.png"
            },
            {
                name: "React Native",
                image: "/skills/react-native.svg"
            },
            {
                name: "Angular",
                image: "/skills/angular.png"
            },
            {
                name: "Figma",
                image: "/skills/figma.svg"
            },
            {
                name: "Node.js",
                image: "/skills/nodejs.png"
            },
            {
                name: "Next.js",
                image: "/skills/nextjs.svg"
            },
            {
                name: "Astro",
                image: "/skills/astro.svg"
            },
            {
                name: "Django",
                image: "/skills/django.png"
            },
            {
                name: "Nginx",
                image: "/skills/nginx.png"
            },
            {
                name: "Redis",
                image: "/skills/redis.png"
            },
            {
                name: "MySQL",
                image: "/skills/mysql.svg"
            },
            {
                name: "MongoDB",
                image: "/skills/mongodb.png"
            },
            {
                name: "PostgreSQL",
                image: "/skills/postgresql.svg"
            },
            {
                name: "SQLite",
                image: "/skills/sqlite.png"
            },
            {
                name: "Jenkins",
                image: "/skills/jenkins.png"
            },
            {
                name: "Terraform",
                image: "/skills/terraform.png"
            },
            {
                name: "Helm",
                image: "/skills/helm.svg"
            },
            {
                name: "Kubernetes",
                image: "/skills/kubernetes.png"
            },
            {
                name: "Docker",
                image: "/skills/docker.png"
            },
            {
                name: "Spinnaker",
                image: "/skills/spinnaker.png"
            },
            {
                name: "Airflow",
                image: "/skills/airflow.png"
            },
            {
                name: "Apache Spark",
                image: "/skills/spark.png"
            },
            {
                name: "Apache Iceberg",
                image: "/skills/iceberg.png"
            },
            {
                name: "Apache Kafka",
                image: "/skills/kafka.svg"
            },
            {
                name: "Trino",
                image: "/skills/trino.png"
            },
            {
                name: "Grafana",
                image: "/skills/grafana.png"
            },
            {
                name: "Prometheus",
                image: "/skills/prometheus.png"
            },
            {
                name: "Logstash",
                image: "/skills/logstash.svg"
            },
            {
                name: "Loki",
                image: "/skills/loki.png"
            },
            {
                name: "Ansible",
                image: "/skills/ansible.png"
            },
            {
                name: "Puppet",
                image: "/skills/puppet.png"
            },
            {
                name: "Wireshark",
                image: "/skills/wireshark.png"
            },
            {
                name: "Wireguard",
                image: "/skills/wireguard.png"
            }
        ]
    },
    {
        category: "Other Skills",
        items: [
            {
                name: "AWS",
                image: "/skills/aws.png"
            },
            {
                name: "Azure",
                image: "/skills/azure.png"
            },
            {
                name: "Oracle",
                image: "/skills/oracle.png"
            },
            {
                name: "Linux",
                image: "/skills/linux.png"
            },
            {
                name: "DevSecOps",
                image: "/skills/security.png"
            },
            {
                name: "Computer Networking",
                image: "/skills/security.png"
            },
            {
                name: "Networking Security",
                image: "/skills/security.png"
            },
            {
                name: "Unit Testing",
                image: "/skills/testing.png"
            },
            {
                name: "Integration Testing",
                image: "/skills/testing.png"
            },
        ]
    },
];
