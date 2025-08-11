import Link from 'next/link'

interface BreadcrumbProps {
  currentPage: string
}

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <div className="page-nav no-margin row">
      <div className="container">
        <div className="row">
          <ul>
            <li>
              <Link href="/">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li><i className="fas fa-angle-double-right"></i>{currentPage}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}