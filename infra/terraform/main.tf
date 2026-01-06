provider "aws" {
  region                   = "us-east-1"
  shared_credentials_files = ["./.aws-credentials"]
  profile                  = "terraform"
}

resource "aws_route53_zone" "main" {
  name = "viktorvasylkovskyi.com"
}

resource "aws_route53domains_registered_domain" "main" {
  domain_name = "viktorvasylkovskyi.com"
  # Current Name Servers
  dynamic "name_server" {
    for_each = aws_route53_zone.main.name_servers
    content {
      name = name_server.value
    }
  }

  # Vercel Nameservers
  name_server {
    name = "ns1.vercel-dns.com"
  }

  name_server {
    name = "ns2.vercel-dns.com"
  }
}

variable "vercel_cname_records" {
  type = map(string)
  default = {
    www          = "2cdd171474ea9c70.vercel-dns-017.com."
  }
}

resource "aws_route53_record" "vercel_cname" {
  for_each = var.vercel_cname_records

  zone_id = aws_route53_zone.main.zone_id
  name    = each.key
  type    = "CNAME"
  ttl     = 300
  records = [each.value]
}

variable "vercel_a_records" {
  type = map(string)
  default = {
    www          = "216.198.79.1"
  }
}

# Add A record for root domain '@' pointing to 216.198.79.1
resource "aws_route53_record" "root_a_record" {
  zone_id = aws_route53_zone.main.zone_id
  name    = "@"
  type    = "A"
  ttl     = 300
  records = ["216.198.79.1"]
}
