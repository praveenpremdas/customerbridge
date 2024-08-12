import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "react-feather";
import { Breadcrumb, BreadcrumbItem, Col } from "reactstrap";


export const BreadCrumbs = () => {
  const pathname = usePathname();
 
  const symbolRegex = /[!@#\$%\^&\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~\-=]/g;
  const [firstPart, secondPart] = pathname.split("/").slice(1).map((item) => item.replace(symbolRegex, " "));


  return (
    <Col xs="4" xl="4" className="page-title">
      <h4 className="f-w-700 text-capitalize">{secondPart ? secondPart : firstPart}</h4>
      <nav>
        <Breadcrumb className="justify-content-sm-start align-items-center">
          <BreadcrumbItem><Link href={`/customers`}><Home /></Link></BreadcrumbItem>
          <BreadcrumbItem className={`f-w-400 text-capitalize`}>{firstPart}</BreadcrumbItem>
          <BreadcrumbItem className={`f-w-400 ${!secondPart ? "active" : ""}`}>{secondPart}</BreadcrumbItem>
          {secondPart && <BreadcrumbItem className={`f-w-400 active`}>{secondPart}</BreadcrumbItem>}
        </Breadcrumb>
      </nav>
    </Col>
  );
};



