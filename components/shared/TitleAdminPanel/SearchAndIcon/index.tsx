import { useState, useEffect } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from '../../../../styles/AdminTitle.module.css';
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import StyledButton from '../../StyledButton';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { setSearch, clearSearch } from '../../../../store/modules/admin/shared/search/reducer';

interface SearchAndIcon {
  icon: IconProp;
  newPath: string;
}

const SearchAndIcon: React.FC<SearchAndIcon> = ({ icon, newPath }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  // limpando a pesquisa quando o component for renderizado
  useEffect(() => {
    dispatch(clearSearch());
  }, [])

  const search = () => {
    dispatch(setSearch(inputValue));
  }

  return (
    <Row>
      <Col lg={9} xs>
        <Row>
          <Col lg={9} xs={10}>
            <InputGroup>
              <FormControl 
                placeholder="Pesquisar usuário" 
                className={styles.input} 
                value={inputValue}
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) => {
                    setInputValue(evt.target.value);
                  }
                }

                onKeyPress={
                  (evt: React.KeyboardEvent<HTMLInputElement>) => {
                    if (evt.key.toLowerCase() === 'enter') {
                      search()
                    }
                  }
                }
              />
            </InputGroup>
          </Col>

          <Col lg={3} xs={2} className="mt-1"
            style={{cursor: 'pointer'}}>
            <FontAwesomeIcon 
              icon={faSearch} 
              size="lg" 
              color="var(--color-gray-light)" 
              className="float-left" 
              onClick={search}
            />
          </Col>
        </Row>
      </Col>

      <Col lg={2} xs={{ span: 3 }} className={styles.titleButton}>
        <Link href={newPath}>
          <a>
            <StyledButton icon={icon} type_button="blue" />
          </a>
        </Link>
      </Col>
    </Row>
  )
}

export default SearchAndIcon;